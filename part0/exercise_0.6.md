sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new\_note\_spa
    activate server
    server-->>browser: 201 Created.
    deactivate server
