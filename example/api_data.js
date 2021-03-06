define({ api: [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "Admin access rights needed. ",
      "description": "Optionally you can write here further Informations about the permission.\n\nAn \"apiDefinePermission\"-block can have an \"apiVersion\", so you can attach the block to a specific version.\n"
    },
    "description": "<p>Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "registered",
            "optional": false,
            "description": "<p>Registration Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "field": "nicknames",
            "optional": false,
            "description": "<p>List of Users nicknames (Array of Strings).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "profile",
            "optional": false,
            "description": "<p>Profile data (example for an Object)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "profile.age",
            "optional": false,
            "description": "<p>Users age.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "profile.image",
            "optional": false,
            "description": "<p>Avatar-Image.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "options",
            "optional": false,
            "description": "<p>List of Users options (Array of Objects).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "options.name",
            "optional": false,
            "description": "<p>Option Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "options.value",
            "optional": false,
            "description": "<p>Option Value.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "   HTTP/1.1 401 Not Authenticated\n   {\n     \"error\": \"NoAccessRight\"\n   }\n"
        }
      ]
    },
    "filename": "source/example/example.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "This title is visible in version 0.1.0 and 0.2.0",
      "description": ""
    },
    "description": "<p>Here you can describe the function.Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
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
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      }
    },
    "filename": "source/example/_apidoc.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "This title is visible in version 0.1.0 and 0.2.0",
      "description": ""
    },
    "description": "<p>Here you can describe the function.Multilines are possible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
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
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "<p>Fullname of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The error description text in version 0.1.0.</p>"
          }
        ]
      }
    },
    "filename": "source/example/_apidoc.js"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": "none",
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used.Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the User.</p>"
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
            "field": "id",
            "optional": false,
            "description": "<p>The new Users-ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example/example.js"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": "none",
    "description": "<p>In this case &quot;apiErrorStructure&quot; is defined and used.Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the User.</p>"
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
            "field": "id",
            "optional": false,
            "description": "<p>The Users-ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example/_apidoc.js"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a new User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": "none",
    "description": "<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiErrorStructure&quot;</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example/example.js"
  },
  {
    "version": "0.3.0",
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example/_apidoc.js"
  },
  {
    "version": "0.2.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example/_apidoc.js"
  },
  {
    "version": "0.1.0",
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example/_apidoc.js"
  }
] });