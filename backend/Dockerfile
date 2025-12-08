FROM python:3.13-slim-bookworm

RUN pip install uv

WORKDIR /inheir-backend

RUN mkdir uploads

RUN apt-get update

# RUN apt-get install -y build-essential ca-certificates libssl-dev wget

COPY pyproject.toml uv.lock .python-version ./

RUN touch README.md

COPY src/inheir_backend/ ./inheir_backend/

RUN uv sync

RUN uv add gunicorn

EXPOSE 80

EXPOSE 443

EXPOSE 8000

ENTRYPOINT ["./.venv/bin/python", "-m", "gunicorn", "-w", "3", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:8000", "inheir_backend.server:app"]