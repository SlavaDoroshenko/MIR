from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "users" (
    "id" BIGSERIAL NOT NULL PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(64) NOT NULL,
    "birthday" DATE NOT NULL,
    "discount_amount" SMALLINT NOT NULL,
    "gender" VARCHAR(5) NOT NULL,
    "phone_number" VARCHAR(15) NOT NULL
);
COMMENT ON COLUMN "users"."gender" IS 'MAN: man\nWOMAN: woman';
CREATE TABLE IF NOT EXISTS "masters" (
    "id" BIGSERIAL NOT NULL PRIMARY KEY,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(64) NOT NULL,
    "birthday" DATE NOT NULL,
    "gender" VARCHAR(5) NOT NULL,
    "phone_number" VARCHAR(15) NOT NULL
);
COMMENT ON COLUMN "masters"."gender" IS 'MAN: man\nWOMAN: woman';
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """
