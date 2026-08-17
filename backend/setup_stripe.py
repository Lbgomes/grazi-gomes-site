import os
import stripe
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).parent / '.env')
stripe.api_key = os.environ["STRIPE_SECRET_KEY"]

CATALOG = [
    {
        "emergent_product_id": "sessao_avulsa",
        "name": "Sessão Avulsa — Terapia Individual (50 min)",
        "prices": [{"lookup_key": "sessao_avulsa", "amount": 25000, "currency": "brl"}],
    },
    {
        "emergent_product_id": "pacote_mensal",
        "name": "Pacote Mensal — 4 sessões de Terapia Individual",
        "prices": [{"lookup_key": "pacote_mensal", "amount": 90000, "currency": "brl"}],
    },
    {
        "emergent_product_id": "plantao_psicologico",
        "name": "Plantão Psicológico — atendimento em até 24h",
        "prices": [{"lookup_key": "plantao_psicologico", "amount": 35000, "currency": "brl"}],
    },
]

account = stripe.Account.retrieve()
print("account country:", account["country"])

service_code = "txcd_20030000"
try:
    codes = stripe.TaxCode.list(limit=100).data
    match = [c for c in codes if "service" in c.description.lower() or "professional" in c.description.lower()]
    for c in match[:5]:
        print("taxcode:", c.id, "-", c.description)
except Exception as e:
    print("taxcode list failed:", e)


def get_or_create_product(entry):
    for p in stripe.Product.list(active=True).auto_paging_iter():
        if p.to_dict().get("metadata", {}).get("emergent_product_id") == entry["emergent_product_id"]:
            return p
    return stripe.Product.create(
        name=entry["name"], tax_code=service_code,
        metadata={"managed_by": "emergent", "emergent_product_id": entry["emergent_product_id"]},
    )


for entry in CATALOG:
    product = get_or_create_product(entry)
    for price in entry["prices"]:
        existing = stripe.Price.list(lookup_keys=[price["lookup_key"]], active=True, limit=1).data
        if existing and (existing[0].unit_amount != price["amount"] or existing[0].currency != price["currency"]):
            stripe.Price.modify(existing[0].id, active=False)
            existing = []
        if not existing:
            stripe.Price.create(
                product=product.id, unit_amount=price["amount"], currency=price["currency"],
                lookup_key=price["lookup_key"], transfer_lookup_key=True,
            )
    print("ok:", entry["emergent_product_id"])

print("catalog ready")
