export interface RequestModel {
    url: string
    method: string
    body?: BodyInit | null
    headers?: HeadersInit
}

export interface ResponseModel {
    rawResponse: Response
    responseParsed?: unknown
    statusCode: number
    statusText: string
}

export interface RequestResponseModel {
    request: RequestModel
    response: ResponseModel
}

export interface XHRResponseModel {
    xhrInstance: XMLHttpRequest
    statusCode: number
    statusText: string
}
