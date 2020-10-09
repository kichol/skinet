using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made man",
                401 => "Authorized, you are not",
                404 => "Yoda says: resource found, it was not",
                500 => "Errors are the path to the darkside. Errors lead to anger. Anger leads to hate",
                _ => null

            };
        }
    }
}