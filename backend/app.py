from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import email, plan_day

app = FastAPI()

# Allow frontend to talk to backend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(email.router)
app.include_router(plan_day.router)