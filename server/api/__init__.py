from fastapi import APIRouter

from . import common
from . import users
from . import masters

def setup_routers() -> APIRouter:
    router = APIRouter()

    router.include_router(common.router)
    router.include_router(users.router)
    router.include_router(masters.router)
    return router