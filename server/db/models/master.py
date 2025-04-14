from tortoise import fields
from tortoise.models import Model
from tortoise.contrib.pydantic import pydantic_model_creator
from const import Gender

class Master(Model):
    id = fields.BigIntField(pk=True)
    created_at = fields.DatetimeField(auto_now_add=True)
    name = fields.CharField(64)
    birthday = fields.DateField()
    gender = fields.CharEnumField(Gender)
    phone_number = fields.CharField(max_length=15)

    class Meta:
        table = "masters"

MasterSchema = pydantic_model_creator(Master)