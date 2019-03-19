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

        // Swaping Faculty_ID with Enrollment Number
        let enroll_num = '<label class="text-primary"><small>Enrollment number</small></label><input class="form-control" placeholder="Enrollment number" id="enroll_num">';
        $('#enroll_or_faculty_id').empty();
        $('#enroll_or_faculty_id').append(enroll_num);
        // Adding Programme Selection
        let program = '<div class="col-md"><label class="text-primary"><small>Programme</small></label><select class="custom-select text-muted"><option selected>Choose...</option><option value="BTech">BTech</option><option value="MBA">MBA</option><option value="BBA">BBA</option></select></div>';
        $('#program_or_dept').append(program);
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

        // Swaping Enrollment Number with Faculty_ID
        let faculty_id = '<label class="text-primary"><small>Faculty ID</small></label><input class="form-control" placeholder="Faculty ID" id="faculty_id">';
        $('#enroll_or_faculty_id').empty();
        $('#enroll_or_faculty_id').append(faculty_id);

        // Removing Programme Selection
        $('#program_or_dept').empty();
        
    }
}

