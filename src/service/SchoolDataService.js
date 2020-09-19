import axios from 'axios'

const STUDENTS_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${STUDENTS_API_URL}/`

class SchoolDataService {
    retrieveAllStudents() {
        return axios.get(`${INSTRUCTOR_API_URL}/students`);
    }

    deleteStudent(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/students/${id}`);
    }

    retrieveStudent(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/students/${id}`);
    }

    async updateStudent(id, student) {
        return await axios.put(`${INSTRUCTOR_API_URL}/students`, student);
    }

    async createStudent(student) {
        return await axios.post(`${INSTRUCTOR_API_URL}/students/`, student);
    }
}
export default new SchoolDataService()