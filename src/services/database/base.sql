CREATE TABLE IF NOT EXISTS connections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone_number TEXT
);

CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE IF NOT EXISTS connections_tags (
    connection_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (connection_id) REFERENCES connections (id),
    FOREIGN KEY (tag_id) REFERENCES tags (id),
    PRIMARY KEY (connection_id, tag_id)
);

CREATE TABLE IF NOT EXISTS reminders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    time TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS reminders_connections (
    reminder_id INTEGER,
    connection_id INTEGER,
    FOREIGN KEY (reminder_id) REFERENCES reminders (id),
    FOREIGN KEY (connection_id) REFERENCES connections (id),
    PRIMARY KEY (reminder_id, connection_id)
);

CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE IF NOT EXISTS groups_connections (
    group_id INTEGER,
    connection_id INTEGER,
    FOREIGN KEY (group_id) REFERENCES groups (id),
    FOREIGN KEY (connection_id) REFERENCES connections (id),
    PRIMARY KEY (group_id, connection_id)
);
