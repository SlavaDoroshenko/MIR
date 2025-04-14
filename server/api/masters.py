from fastapi import APIRouter, Request, Response
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from const import Gender
from tortoise.contrib.pydantic import pydantic_model_creator

from db import Master, MasterSchema


router = APIRouter(prefix="/api/masters")

class MasterResponse(BaseModel):
    id: int
    created_at: str
    name: str
    birthday: str
    gender: Gender
    phone_number: str

MasterRequest = pydantic_model_creator(
    Master,
    name="MasterRequest",
    exclude=("id", "created_at"),  # Явно исключаем поля
    exclude_readonly=True          # Игнорируем поля только для чтения
)

@router.get("/get")
async def add_master(request: Request) -> JSONResponse:
    masters = await Master.all()
    masters_data = []

    for master in masters:
        #masters_data.append((await MasterSchema.from_tortoise_orm(master)).model_dump(mode="json"))
        masters_data.append(MasterResponse(
                id=master.id,
                created_at=master.created_at.isoformat(),
                name=master.name,
                birthday=master.birthday.isoformat(),
                gender=master.gender,
                phone_number=master.phone_number
            ).model_dump(mode="json"))

    print(masters_data)
        
    return JSONResponse({"masters": masters_data})


@router.post("/add")
async def add_master(master_data: MasterRequest) -> JSONResponse:
    master = await Master.create(
            name=master_data.name,
            birthday=master_data.birthday,
            gender=master_data.gender,
            phone_number=master_data.phone_number
        )
    
    return MasterResponse(
            id=master.id,
            created_at=master.created_at.isoformat(),
            name=master.name,
            birthday=master.birthday.isoformat(),
            gender=master.gender,
            phone_number=master.phone_number
        )