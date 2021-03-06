define({ "api": [
  {
    "type": "get",
    "url": "/pdf/:nombre/:usuario",
    "title": "",
    "name": "getPDF",
    "group": "Main",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del archivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "documento",
            "description": "<p>PDF solicitado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/tex/:usuario",
    "title": "subir documento latex",
    "name": "postTex",
    "group": "Main",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "indica",
            "description": "<p>que el archivo se subió correctamente y la compilación comenzará en breve</p>"
          }
        ]
      }
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
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/tex/:nombre/:usuario",
    "title": "",
    "name": "getTexFile",
    "group": "Subida_y_bajada_de_archivos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del archivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "archivo",
            "description": "<p>TEX</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "Subida_y_bajada_de_archivos"
  },
  {
    "type": "delete",
    "url": "/pdf/:nombre/:usuario",
    "title": "eliminar documento pdf",
    "name": "eliminarPDF",
    "group": "eliminar_Archivos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del archivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>confirmando que el archivo ha sido eliminado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "eliminar_Archivos"
  },
  {
    "type": "delete",
    "url": "/tex/:nombre/:usuario",
    "title": "eliminar documento latex",
    "name": "eliminarTex",
    "group": "eliminar_Archivos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre del archivo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mensaje",
            "description": "<p>confirmando que el archivo ha sido eliminado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "eliminar_Archivos"
  },
  {
    "type": "get",
    "url": "/listar/:usuario",
    "title": "",
    "name": "listar",
    "group": "listado_de_archivos_en_el_servidor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los archivos del usuario dado en el servidor.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "listado_de_archivos_en_el_servidor"
  },
  {
    "type": "get",
    "url": "/listar-pdf/:usuario",
    "title": "",
    "name": "listarPDF",
    "group": "listado_de_archivos_en_el_servidor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "archivos",
            "description": "<p>PDF del usuario dado en el servidor.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "listado_de_archivos_en_el_servidor"
  },
  {
    "type": "get",
    "url": "/listar-tex/:usuario",
    "title": "",
    "name": "listarTex",
    "group": "listado_de_archivos_en_el_servidor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "archivos",
            "description": "<p>tex del usuario dado en el servidor.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "listado_de_archivos_en_el_servidor"
  },
  {
    "type": "get",
    "url": "/listar/:usuario",
    "title": "",
    "name": "listarTodos",
    "group": "listado_de_archivos_en_el_servidor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usuario",
            "description": "<p>Nombre de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "todos",
            "description": "<p>los archivos de todos los usuarios en el servidor.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "listado_de_archivos_en_el_servidor"
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
      }
    },
    "version": "0.0.0",
    "filename": "src/index.js",
    "groupTitle": "test"
  }
] });
