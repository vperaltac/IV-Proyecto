define({ "api": [
  {
    "type": "post",
    "url": "/compilar",
    "title": "Devuelve OK si el servicio está disponible",
    "name": "postCompilar",
    "group": "main",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "PDF",
            "description": "<p>compilado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>No se encontró el archivo fuente.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongName",
            "description": "<p>Nombre incorrecto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n String indicando error",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "main"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "Devuelve OK si el servicio está disponible",
    "name": "getStatus",
    "group": "test",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Status:",
            "description": "<p>OK</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "test"
  }
] });
