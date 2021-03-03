export const status = {
  // 100 Continue
  // [[RFC7231, Section 6.2.1](https://tools.ietf.org/html/rfc7231#section-6.2.1)]
  100: { code: "CONTINUE", label: "Continue" },

  // 101 Switching Protocols
  // [[RFC7231, Section 6.2.2](https://tools.ietf.org/html/rfc7231#section-6.2.2)]
  101: { code: "SWITCHING_PROTOCOLS", label: "Switching Protocols" },

  // 102 Processing
  // [[RFC2518](https://tools.ietf.org/html/rfc2518)]
  102: { code: "PROCESSING", label: "Processing" },

  // 200 OK
  // [[RFC7231, Section 6.3.1](https://tools.ietf.org/html/rfc7231#section-6.3.1)]
  200: { code: "OK", label: "OK" },

  // 201 Created
  // [[RFC7231, Section 6.3.2](https://tools.ietf.org/html/rfc7231#section-6.3.2)]
  201: { code: "CREATED", label: "Created" },

  // 202 Accepted
  // [[RFC7231, Section 6.3.3](https://tools.ietf.org/html/rfc7231#section-6.3.3)]
  202: { code: "ACCEPTED", label: "Accepted" },

  // 203 Non-Authoritative Information
  // [[RFC7231, Section 6.3.4](https://tools.ietf.org/html/rfc7231#section-6.3.4)]
  203: {
    code: "NON_AUTHORITATIVE_INFORMATION",
    label: "Non Authoritative Information",
  },

  // 204 No Content
  // [[RFC7231, Section 6.3.5](https://tools.ietf.org/html/rfc7231#section-6.3.5)]
  204: { code: "NO_CONTENT", label: "No Content" },

  // 205 Reset Content
  // [[RFC7231, Section 6.3.6](https://tools.ietf.org/html/rfc7231#section-6.3.6)]
  205: { code: "RESET_CONTENT", label: "Reset Content" },

  // 206 Partial Content
  // [[RFC7233, Section 4.1](https://tools.ietf.org/html/rfc7233#section-4.1)]
  206: { code: "PARTIAL_CONTENT", label: "Partial Content" },

  // 207 Multi-Status
  // [[RFC4918](https://tools.ietf.org/html/rfc4918)]
  207: { code: "MULTI_STATUS", label: "Multi-Status" },

  // 208 Already Reported
  // [[RFC5842](https://tools.ietf.org/html/rfc5842)]
  208: { code: "ALREADY_REPORTED", label: "Already Reported" },

  // 226 IM Used
  // [[RFC3229](https://tools.ietf.org/html/rfc3229)]
  226: { code: "IM_USED", label: "IM Used" },

  // 300 Multiple Choices
  // [[RFC7231, Section 6.4.1](https://tools.ietf.org/html/rfc7231#section-6.4.1)]
  300: { code: "MULTIPLE_CHOICES", label: "Multiple Choices" },

  // 301 Moved Permanently
  // [[RFC7231, Section 6.4.2](https://tools.ietf.org/html/rfc7231#section-6.4.2)]
  301: { code: "MOVED_PERMANENTLY", label: "Moved Permanently" },

  // 302 Found
  // [[RFC7231, Section 6.4.3](https://tools.ietf.org/html/rfc7231#section-6.4.3)]
  302: { code: "FOUND", label: "Found" },

  // 303 See Other
  // [[RFC7231, Section 6.4.4](https://tools.ietf.org/html/rfc7231#section-6.4.4)]
  303: { code: "SEE_OTHER", label: "See Other" },

  // 304 Not Modified
  // [[RFC7232, Section 4.1](https://tools.ietf.org/html/rfc7232#section-4.1)]
  304: { code: "NOT_MODIFIED", label: "Not Modified" },

  // 305 Use Proxy
  // [[RFC7231, Section 6.4.5](https://tools.ietf.org/html/rfc7231#section-6.4.5)]
  305: { code: "USE_PROXY", label: "Use Proxy" },

  // 307 Temporary Redirect
  // [[RFC7231, Section 6.4.7](https://tools.ietf.org/html/rfc7231#section-6.4.7)]
  307: { code: "TEMPORARY_REDIRECT", label: "Temporary Redirect" },

  // 308 Permanent Redirect
  // [[RFC7238](https://tools.ietf.org/html/rfc7238)]
  308: { code: "PERMANENT_REDIRECT", label: "Permanent Redirect" },

  // 400 Bad Request
  // [[RFC7231, Section 6.5.1](https://tools.ietf.org/html/rfc7231#section-6.5.1)]
  400: { code: "BAD_REQUEST", label: "Bad Request" },

  // 401 Unauthorized
  // [[RFC7235, Section 3.1](https://tools.ietf.org/html/rfc7235#section-3.1)]
  401: { code: "UNAUTHORIZED", label: "Unauthorized" },

  // 402 Payment Required
  // [[RFC7231, Section 6.5.2](https://tools.ietf.org/html/rfc7231#section-6.5.2)]
  402: { code: "PAYMENT_REQUIRED", label: "Payment Required" },

  // 403 Forbidden
  // [[RFC7231, Section 6.5.3](https://tools.ietf.org/html/rfc7231#section-6.5.3)]
  403: { code: "FORBIDDEN", label: "Forbidden" },

  // 404 Not Found
  // [[RFC7231, Section 6.5.4](https://tools.ietf.org/html/rfc7231#section-6.5.4)]
  404: { code: "NOT_FOUND", label: "Not Found" },

  // 405 Method Not Allowed
  // [[RFC7231, Section 6.5.5](https://tools.ietf.org/html/rfc7231#section-6.5.5)]
  405: { code: "METHOD_NOT_ALLOWED", label: "Method Not Allowed" },

  // 406 Not Acceptable
  // [[RFC7231, Section 6.5.6](https://tools.ietf.org/html/rfc7231#section-6.5.6)]
  406: { code: "NOT_ACCEPTABLE", label: "Not Acceptable" },

  // 407 Proxy Authentication Required
  // [[RFC7235, Section 3.2](https://tools.ietf.org/html/rfc7235#section-3.2)]
  407: {
    code: "PROXY_AUTHENTICATION_REQUIRED",
    label: "Proxy Authentication Required",
  },

  // 408 Request Timeout
  // [[RFC7231, Section 6.5.7](https://tools.ietf.org/html/rfc7231#section-6.5.7)]
  408: { code: "REQUEST_TIMEOUT", label: "Request Timeout" },

  // 409 Conflict
  // [[RFC7231, Section 6.5.8](https://tools.ietf.org/html/rfc7231#section-6.5.8)]
  409: { code: "CONFLICT", label: "Conflict" },

  // 410 Gone
  // [[RFC7231, Section 6.5.9](https://tools.ietf.org/html/rfc7231#section-6.5.9)]
  410: { code: "GONE", label: "Gone" },

  // 411 Length Required
  // [[RFC7231, Section 6.5.10](https://tools.ietf.org/html/rfc7231#section-6.5.10)]
  411: { code: "LENGTH_REQUIRED", label: "Length Required" },

  // 412 Precondition Failed
  // [[RFC7232, Section 4.2](https://tools.ietf.org/html/rfc7232#section-4.2)]
  412: { code: "PRECONDITION_FAILED", label: "Precondition Failed" },

  // 413 Payload Too Large
  // [[RFC7231, Section 6.5.11](https://tools.ietf.org/html/rfc7231#section-6.5.11)]
  413: { code: "PAYLOAD_TOO_LARGE", label: "Payload Too Large" },

  // 414 URI Too Long
  // [[RFC7231, Section 6.5.12](https://tools.ietf.org/html/rfc7231#section-6.5.12)]
  414: { code: "URI_TOO_LONG", label: "URI Too Long" },

  // 415 Unsupported Media Type
  // [[RFC7231, Section 6.5.13](https://tools.ietf.org/html/rfc7231#section-6.5.13)]
  415: { code: "UNSUPPORTED_MEDIA_TYPE", label: "Unsupported Media Type" },

  // 416 Range Not Satisfiable
  // [[RFC7233, Section 4.4](https://tools.ietf.org/html/rfc7233#section-4.4)]
  416: { code: "RANGE_NOT_SATISFIABLE", label: "Range Not Satisfiable" },

  // 417 Expectation Failed
  // [[RFC7231, Section 6.5.14](https://tools.ietf.org/html/rfc7231#section-6.5.14)]
  417: { code: "EXPECTATION_FAILED", label: "Expectation Failed" },

  // 418 I'm a teapot
  // [curiously not registered by IANA but [RFC2324](https://tools.ietf.org/html/rfc2324)]
  418: { code: "IM_A_TEAPOT", label: "I'm a teapot" },

  // 421 Misdirected Request
  // [RFC7540, Section 9.1.2](http://tools.ietf.org/html/rfc7540#section-9.1.2)
  421: { code: "MISDIRECTED_REQUEST", label: "Misdirected Request" },

  // 422 Unprocessable Entity
  // [[RFC4918](https://tools.ietf.org/html/rfc4918)]
  422: { code: "UNPROCESSABLE_ENTITY", label: "Unprocessable Entity" },

  // 423 Locked
  // [[RFC4918](https://tools.ietf.org/html/rfc4918)]
  423: { code: "LOCKED", label: "Locked" },

  // 424 Failed Dependency
  // [[RFC4918](https://tools.ietf.org/html/rfc4918)]
  424: { code: "FAILED_DEPENDENCY", label: "Failed Dependency" },

  // 426 Upgrade Required
  // [[RFC7231, Section 6.5.15](https://tools.ietf.org/html/rfc7231#section-6.5.15)]
  426: { code: "UPGRADE_REQUIRED", label: "Upgrade Required" },

  // 428 Precondition Required
  // [[RFC6585](https://tools.ietf.org/html/rfc6585)]
  428: { code: "PRECONDITION_REQUIRED", label: "Precondition Required" },

  // 429 Too Many Requests
  // [[RFC6585](https://tools.ietf.org/html/rfc6585)]
  429: { code: "TOO_MANY_REQUESTS", label: "Too Many Requests" },

  // 431 Request Header Fields Too Large
  // [[RFC6585](https://tools.ietf.org/html/rfc6585)]
  431: {
    code: "REQUEST_HEADER_FIELDS_TOO_LARGE",
    label: "Request Header Fields Too Large",
  },

  // 451 Unavailable For Legal Reasons
  // [[RFC7725](http://tools.ietf.org/html/rfc7725)]
  451: {
    code: "UNAVAILABLE_FOR_LEGAL_REASONS",
    label: "Unavailable For Legal Reasons",
  },

  // 500 Internal Server Error
  // [[RFC7231, Section 6.6.1](https://tools.ietf.org/html/rfc7231#section-6.6.1)]
  500: { code: "INTERNAL_SERVER_ERROR", label: "Internal Server Error" },

  // 501 Not Implemented
  // [[RFC7231, Section 6.6.2](https://tools.ietf.org/html/rfc7231#section-6.6.2)]
  501: { code: "NOT_IMPLEMENTED", label: "Not Implemented" },

  // 502 Bad Gateway
  // [[RFC7231, Section 6.6.3](https://tools.ietf.org/html/rfc7231#section-6.6.3)]
  502: { code: "BAD_GATEWAY", label: "Bad Gateway" },

  // 503 Service Unavailable
  // [[RFC7231, Section 6.6.4](https://tools.ietf.org/html/rfc7231#section-6.6.4)]
  503: { code: "SERVICE_UNAVAILABLE", label: "Service Unavailable" },

  // 504 Gateway Timeout
  // [[RFC7231, Section 6.6.5](https://tools.ietf.org/html/rfc7231#section-6.6.5)]
  504: { code: "GATEWAY_TIMEOUT", label: "Gateway Timeout" },

  // 505 HTTP Version Not Supported
  // [[RFC7231, Section 6.6.6](https://tools.ietf.org/html/rfc7231#section-6.6.6)]
  505: {
    code: "HTTP_VERSION_NOT_SUPPORTED",
    label: "HTTP Version Not Supported",
  },

  // 506 Variant Also Negotiates
  // [[RFC2295](https://tools.ietf.org/html/rfc2295)]
  506: { code: "VARIANT_ALSO_NEGOTIATES", label: "Variant Also Negotiates" },

  // 507 Insufficient Storage
  // [[RFC4918](https://tools.ietf.org/html/rfc4918)]
  507: { code: "INSUFFICIENT_STORAGE", label: "Insufficient Storage" },

  // 508 Loop Detected
  // [[RFC5842](https://tools.ietf.org/html/rfc5842)]
  508: { code: "LOOP_DETECTED", label: "Loop Detected" },

  // 510 Not Extended
  // [[RFC2774](https://tools.ietf.org/html/rfc2774)]
  510: { code: "NOT_EXTENDED", label: "Not Extended" },

  // 511 Network Authentication Required
  // [[RFC6585](https://tools.ietf.org/html/rfc6585)]
  511: {
    code: "NETWORK_AUTHENTICATION_REQUIRED",
    label: "Network Authentication Required",
  },
};
