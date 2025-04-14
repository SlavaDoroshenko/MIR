from aiogram import Router
from aiogram.types import Message
from aiogram.filters import CommandStart

from bot.keyboards import main_markup
from db import User

router = Router(name="common")

@router.message(CommandStart())
async def start(message: Message) -> None:
    await message.answer(f"Добро пожаловать, {message.from_user.first_name}! Начните играть прямо сейчас.", reply_markup=main_markup)