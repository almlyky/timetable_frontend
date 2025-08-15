class ApiEndpoints {
  static BASE_API_URL = "https://timetable-backend-nz88.onrender.com/api/";

  static login = "login/";
  static logout = "logout/";
  static user = "user/";
  static sendResetEmail = "send_reseat_email/";
  static sendForgetPasswordEmail = "send_forget_password_email/";
  static resetTeacherPassword = "reset-password/";
  static departments = "departments/";
  static departmentsUpload = "uploadDepartments/";
  static programsUpload = "uploadPrograms/";
  static levelsUpload = "uploadLevels/";
  static todays = "todays/";
  static periods = "periods/";
  static halls = "halls/";
  static uploadHalls = "uploadHalls/";
  static tables = "tables/";
  static programs = "programs/";
  static levels = "levels/";
  static groups = "groups/";
  static teachers = "teachers/";
  static teachersUpload = "teachersUpload/";
  static teacherTimes = "teacherTimes/";
  static searchTeachersTimes = "searchteacherstimes/";
  static subjects = "subjects/";
  static uploadSubjects = "uploadSubjects/";
  static distributions = "distributions/";
  static lectures = "lectures/";
  static searchTeachers = "searchteachers/";

  // مثال طريقة تجميع URL كامل لأي نقطة نهاية
  static getUrl(endpoint) {
    return this.BASE_API_URL + endpoint;
  }
}
