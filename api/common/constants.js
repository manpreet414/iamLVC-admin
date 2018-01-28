const messages = {
    "errorRetreivingData": "Error occurred while retrieving the data",
    "successRetreivingData": "Data retrieved successfully ",
    "successSendingForgotPasswordEmail": "Password sent successfully",
    "successSendingForgotPasswordLink": "Please check your e-mail to reset your password",
    "errorSendingForgotPasswordEmail": "Username does not exist in our database",
    "userSuccess": "User saved successfully",
    "userUpdateSuccess": "Updated successfully",
    "saveSuccessfully": "Successfully saved",
    "invalidEmailPassword":"Invalid email or password.",
    "requiredParams": "Please pass the required parameters",
    "mailSentSuccessfully": "E-mail sent successfully",
    "updatedSuccessfully": "Updated successfully",
    "adminForgotPassword":"We have emailed you a link to reset your password",
    "passwordResetToken":"Password reset token is invalid or has expired",
    "adminUserNotFoundInDatabase":"This user is not found in database",
    "emailAlreadyExist":"Your e-mail address is already associated with another account",
}

const adminUrl = {
    url: "http://localhost:4300",
    forgotPostRoute: "/#/forgot-password/reset/"
}

const frontendUrl = {
    url: "http://localhost:4200",
    forgotPostRoute: "/forgot-password/reset/"
}

const mailContent = {
    subjectForgotPassword: "✔ Reset your password on I am LVC",
    forgotPasswordText: "You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n Please click on the following link, or paste this into your browser to complete the process:\n\n",
    welcomeSubject: "Welcome to IamLVC app!",
    welcomeText: "Welcome to IamLVC app!  Enjoy the many benefits of using this app, some of them are:.",
    resetPasswordMailSubject: "✔ Your password has been changed",
    resetPasswordMailText: "'This is a confirmation that your password has been changed'",
    adminWelcomeSubject:"Welcome to IamLVC app!"
}


var obj = {
    messages: messages,
    adminUrl: adminUrl,
    frontendUrl:frontendUrl,
    mailContent: mailContent
};


module.exports = obj;