from fastapi import APIRouter, Body
from datetime import datetime, timedelta

router = APIRouter()

@router.post("/plan-day")
async def plan_day(data: dict = Body(...)):
    """
    Generate a simple daily plan from a list of tasks.
    """
    tasks = data.get("tasks", [])
    if not tasks:
        return {"error": "Please provide a list of tasks."}

    # Start at 8:00 AM
    start_time = datetime.strptime("08:00", "%H:%M")
    schedule = []

    # Assign 1.5 hours per task (for demo)
    for i, task in enumerate(tasks):
        time_slot = (start_time + timedelta(hours=1.5 * i)).strftime("%I:%M %p")
        schedule.append(f"🕒 {time_slot} — {task.capitalize()}")

    return {"plan": schedule}