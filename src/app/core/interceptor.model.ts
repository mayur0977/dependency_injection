

 export enum MessageTitles {
    /** provides Susscess title for success toaster */
    Success = 'Success!',
    /** provides error title for error toaster */
    Error = 'Error!',
    /** provides warning title for warning toaster */
    Warning = 'Warning!',
    /** provides InvalidAccess title for InvalidAccess toaster */
    InvalidAccess = 'Invalid Access'
}

export enum Messages {
    /** provide all server comman error message */
    MessageForCommonError = 'Facing issues. Please try again later.',
    /** provide unauthorized error message */
    MessageForUnauthorized = 'You don\'t have permission to access the data for this page.',
    /** provide message if token is expired */
    MessageForUnauthorizedToken = 'Session Expired. Please login again.',
     /** provide message if file is not found */
    MessageForFileNotFound ='File not found',
     /** provide message if Access denied */
    MessageForAccessDenied ='Access Denied',
    /** provide message if EndPointNotFound */
     MessageForEndPointNotFound ='End Point Not Found',
    /** provide message if Request Timeout */
    MessageForRequestTimeout ='Request Timeout',
     /** provide message if Request Timeout */
     MessageForInternalServerError ='Internal Server Error'
}
