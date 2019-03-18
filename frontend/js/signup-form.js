let toggle_switch_faculty_state = 0,
    toggle_switch_student_state = 1;


const toggle_student = () => {
    if(!toggle_switch_student_state){
        let toggle_switch_faculty = document.getElementById('faculty_form_btn');
        let toggle_switch_student = document.getElementById('student_form_btn');

        toggle_switch_student_state = 1;
        toggle_switch_faculty_state = 0;

        toggle_switch_student.classList.replace('btn-outline-primary','btn-primary');
        toggle_switch_faculty.classList.replace('btn-primary','btn-outline-primary');
    }
}

const toggle_faculty = () => {
    if(!toggle_switch_faculty_state){
        let toggle_switch_faculty = document.getElementById('faculty_form_btn');
        let toggle_switch_student = document.getElementById('student_form_btn');

        toggle_switch_student_state = 0;
        toggle_switch_faculty_state = 1;

        toggle_switch_student.classList.replace('btn-primary','btn-outline-primary');
        toggle_switch_faculty.classList.replace('btn-outline-primary','btn-primary');
    }
}