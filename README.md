# Event Planning System — Database Models

The first version of the system will use **5 models**:

1. User
2. Event Category
3. Event
4. Task
5. Guest

---

## 1. User

Represents a person who uses the system and creates/manages events.

| Attribute         | Type     | Description            |
| ----------------- | -------- | ---------------------- |
| `id`              | Integer  | Unique user identifier |
| `username`        | String   | User's username        |
| `email`           | Email    | User's email address   |
| `password`        | Password | User's hashed password |
| `first_name`      | String   | User's first name      |
| `last_name`       | String   | User's last name       |
| `phone_number`    | String   | User's phone number    |
| `profile_picture` | Image    | User's profile picture |
| `created_at`      | DateTime | Account creation date  |
| `updated_at`      | DateTime | Last account update    |

### Relationships

* One User can create **many Events**
* One User can be assigned **many Tasks**

---

# 2. Event Category

Used to categorize different types of events.

### Examples

* Birthday
* Wedding
* Conference
* Workshop
* Meeting
* Party
* Graduation
* Sports
* Other

| Attribute     | Type     | Description                 |
| ------------- | -------- | --------------------------- |
| `id`          | Integer  | Unique category identifier  |
| `name`        | String   | Category name               |
| `description` | Text     | Description of the category |
| `created_at`  | DateTime | Category creation date      |

### Relationships

* One Event Category can have **many Events**
* An Event belongs to **one Event Category**

---

# 3. Event

The main model of the application. Represents an event being planned.

| Attribute        | Type                         | Description                     |
| ---------------- | ---------------------------- | ------------------------------- |
| `id`             | Integer                      | Unique event identifier         |
| `organizer`      | Foreign Key → User           | User who created the event      |
| `category`       | Foreign Key → Event Category | Event category                  |
| `title`          | String                       | Name of the event               |
| `description`    | Text                         | Event description               |
| `event_date`     | Date                         | Date of the event               |
| `event_time`     | Time                         | Starting time of the event      |
| `location`       | String                       | Where the event will take place |
| `maximum_guests` | Integer                      | Maximum number of guests        |
| `status`         | Choice                       | Current event status            |
| `image`          | Image                        | Event cover image               |
| `created_at`     | DateTime                     | Event creation date             |
| `updated_at`     | DateTime                     | Last event update               |

### Event Status

```text
PLANNING
UPCOMING
ONGOING
COMPLETED
CANCELLED
```

### Relationships

* One User can create **many Events**
* One Event belongs to **one User**
* One Event Category can contain **many Events**
* One Event belongs to **one Event Category**
* One Event can have **many Tasks**
* One Event can have **many Guests**

---

# 4. Task

Represents an activity that needs to be completed while planning an event.

### Examples

* Book venue
* Send invitations
* Buy decorations
* Order cake
* Arrange music
* Confirm catering

| Attribute     | Type                | Description                   |
| ------------- | ------------------- | ----------------------------- |
| `id`          | Integer             | Unique task identifier        |
| `event`       | Foreign Key → Event | Event the task belongs to     |
| `title`       | String              | Task name                     |
| `description` | Text                | Task description              |
| `deadline`    | Date                | Task completion deadline      |
| `priority`    | Choice              | Importance of the task        |
| `status`      | Choice              | Current task status           |
| `assigned_to` | Foreign Key → User  | User responsible for the task |
| `created_at`  | DateTime            | Task creation date            |
| `updated_at`  | DateTime            | Last task update              |

### Task Priority

```text
LOW
MEDIUM
HIGH
```

### Task Status

```text
PENDING
IN_PROGRESS
COMPLETED
```

### Relationships

* One Event can have **many Tasks**
* One Task belongs to **one Event**
* One User can be assigned **many Tasks**
* A Task can optionally be assigned to **one User**

---

# 5. Guest

Represents a person invited to an event.

| Attribute      | Type                | Description                   |
| -------------- | ------------------- | ----------------------------- |
| `id`           | Integer             | Unique guest identifier       |
| `event`        | Foreign Key → Event | Event the guest is invited to |
| `name`         | String              | Guest's full name             |
| `email`        | Email               | Guest's email address         |
| `phone_number` | String              | Guest's phone number          |
| `rsvp_status`  | Choice              | Guest's response              |
| `created_at`   | DateTime            | Guest creation date           |
| `updated_at`   | DateTime            | Last guest update             |

### RSVP Status

```text
PENDING
GOING
NOT_GOING
```

### Relationships

* One Event can have **many Guests**
* One Guest belongs to **one Event**

---

# Model Relationship Overview

```text
User
 │
 │ 1
 │
 │ creates
 ▼
Event ──────────────── EventCategory
 │                         │
 │                         │
 │                         │ 1 → Many Events
 │
 ├─────────── Task
 │
 │
 └─────────── Guest
```

More specifically:

```text
User
 │
 ├── 1 ──── Many ──── Event
 │
 └── 1 ──── Many ──── Task


EventCategory
 │
 └── 1 ──── Many ──── Event


Event
 │
 ├── 1 ──── Many ──── Task
 │
 └── 1 ──── Many ──── Guest
```

---

# Complete Model Summary

| Model             | Main Purpose              | Relationships                                  |
| ----------------- | ------------------------- | ---------------------------------------------- |
| **User**          | System users/organizers   | Has many Events, has many Tasks                |
| **EventCategory** | Categorize events         | Has many Events                                |
| **Event**         | Main event information    | Belongs to User & Category; has Tasks & Guests |
| **Task**          | Event planning activities | Belongs to Event; optionally assigned to User  |
| **Guest**         | People invited to events  | Belongs to Event                               |

---

## Initial Database

```text
USER
  │
  │
  ├─────────────── EVENT
  │                  │
  │                  ├──── TASK
  │                  │
  │                  └──── GUEST
  │
  └─────────────── TASK


EVENT CATEGORY
       │
       └────────── EVENT
```

**Keep these 5 models as the initial scope.** You can add models such as `Expense`, `Vendor`, `Notification`, or `Invitation` later only if you decide the project needs them.
