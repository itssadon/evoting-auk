import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs/Observable';
import {
  ValidateService
} from '../../services/validate.service';
import {
  AuthService
} from '../../services/auth.service';
import {
  ToasterModule,
  ToasterService
} from 'angular2-toaster';
import {
  PaystackService
} from '../../services/paystack.service';
import {
  StudentService
} from '../../services/student.service';
import {
  ElcomService
} from '../../services/elcom.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aspirant: any;

  name: String;
  username: String;
  email: String;
  password: String;

  matricno: String;
  firstname: String;
  lastname: String;
  phone: String;
  office: String;
  amount: Number;

  middlename: String;
  department: String;
  course: String;


  constructor(
    private validateService: ValidateService,
    private toasterService: ToasterService,
    private authService: AuthService,
    private router: Router,
    private paystackService: PaystackService,
    private studentService: StudentService,
    private elcomService: ElcomService
  ) {}

  ngOnInit() {
    var script = document.createElement('script');
    script.innerText = "$('select.dropdown').dropdown();";
    $('body').append(script);
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.toasterService.pop('success', 'Success!', 'You are now registered and can log in');
        this.router.navigate(['/login']);
      } else {
        this.toasterService.pop('error', 'Oops!', 'Something went wrong');
        this.router.navigate(['/register']);
      }
    });
  }

  setOfficeAmount(event) {
    let office = event.target.value;
    let amount_words = null,
    amount = null;
    switch (office) {
      case "president":
        amount_words = "Five thousand (N5,000)";
        amount = 500000;
        break;
      case "sec_gen":
        amount_words = "Four thousand (N4,000)";
        amount = 400000;
        break;
      case "vice_president_I":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "fin_sec":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "auditor":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "treasurer":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "software":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "pro_I":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "liason":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "sports_dir":
        amount_words = "Three thousand five hundred (N3,500)";
        amount = 350000;
        break;
      case "vice_president_II":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "asst_sec_gen":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "dir_of_socials":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "dir_of_business":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "welfare":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "dir_of_program":
        amount_words = "Three thousand (N3,000)";
        amount = 300000;
        break;
      case "dir_of_library":
        amount_words = "Two thousand (N2,000)";
        amount = 200000;
        break;
      case "asst_welfare":
        amount_words = "Two thousand (N2,000)";
        amount = 200000;
        break;
      case "asst_sport":
        amount_words = "Two thousand (N2,000)";
        amount = 200000;
        break;
      case "pro_II":
        amount_words = "Two thousand (N2,000)";
        amount = 200000;
        break;

      default:
        amount_words = "Amount in words";
        amount = null;
        office = null;
        break;
    }
    $("#amount_words").val(amount_words);
    this.office = office;
    this.amount = amount;
  }

  triggerSearch(event) {
    if (event.which === 13) {
      event.preventDefault();
      $('#searchBtn').trigger('click');
    }
  }

  searchMatric() {
    $('#searchBtn').addClass("loading disabled");
    const matricno = $('#matricno').val().replace(/\//g, '-').toUpperCase();
    if (matricno === '' || matricno === null) {
      this.toasterService.pop('error', 'Oops!', 'Please enter your matric number');
      $('#matricno').focus();
      $('#searchBtn').removeClass("loading disabled");
      return false;
    }
    // Check id student is an elcom officer first
    this.elcomService.getElcomOfficer(matricno).subscribe(
      response => {
        if (response.isElcom) {
          this.toasterService.pop('error', 'Oops!', response.msg + ' and cannot register as an aspirant');
          $('#searchBtn').removeClass("loading disabled");
          return false;
        } else {
          this.studentService.getStudentRecord(matricno).subscribe(
            response => {
              if (!response.success) {
                this.toasterService.pop('error', 'Oops!', response.msg);
                $('#searchBtn').removeClass("loading disabled");
              } else {
                this.matricno = $('#matricno').val();
                const fullName = response.student_info.full_name;
                const nameArray = fullName.split(' ');
                const lastname = nameArray[0];
                const firstname = nameArray[1];
                let middlename = '';
                if (nameArray[2]) {
                  middlename = nameArray[2];
                }
                const department = 'COMPUTER & MATHEMATICS';
                const course = 'COMP/MATH';
                const office = this.office;
                const amount = this.amount;
                $('#firstname').val(firstname);
                $('#middlename').val(middlename);
                $('#lastname').val(lastname);
                $('#department').val(department);
                $('#course').val(course);
                const email = $('#email').val();
                const phone = $('#phone').val();

                this.aspirant = {
                  matricno: matricno,
                  firstname: firstname,
                  lastname: lastname,
                  email: email,
                  phone: phone,
                  office: office,
                  amount: amount
                };
                $('#searchBtn').removeClass('loading disabled');
              }
            },
            error => {
              this.toasterService.pop('error', 'Oops!', 'Search failed due to server error. Please try after a while');
              $('#searchBtn').removeClass('loading disabled');
            }
          );
        }
      },
      error => {
        this.toasterService.pop('error', 'Oops!', 'Search failed due to network/server error. Please try after a while');
        $('#searchBtn').removeClass("loading disabled");
      }
    );
  }

  onPaySubmit() {
    var pageDimmer = '<div class="ui inverted page dimmer active" id="pageDimmer"><div class="student_info"><div class="center"><div class="center"><div class="ui indeterminate large text loader"><h3>Connecting to Payment Service.<br><br>Please wait...</h3></div></div></div></div></div>';
    $('body').prepend(pageDimmer);

    this.aspirant.email = $('#email').val();
    this.aspirant.phone = $('#phone').val();

    // Required Fields
    if (!this.validateService.validatePayerDetails(this.aspirant)) {
      this.toasterService.pop('error', 'Oops!', 'Please fill in all fields');
      $('#pageDimmer').remove();
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(this.aspirant.email)) {
      this.toasterService.pop('error', 'Oops!', 'Please use a valid email');
      $('#pageDimmer').remove();
      return false;
    }

    // Paystack create customer
    const customer = {
      email: this.aspirant.email,
      first_name: this.aspirant.firstname,
      last_name: this.aspirant.lastname,
      phone: this.aspirant.phone,
      metadata: {
        matric_number: this.aspirant.matricno.toUpperCase()
      }
    };
    this.paystackService.createCustomer(customer).subscribe(response => {
      if (response.status) {
        // Paystack initialize transaction
        const dataString = {
          reference: Date.now(),
          amount: this.aspirant.amount,
          email: this.aspirant.email,
          callback_url: window.location.host + '/status',
          metadata: {
            custom_fields: [{
              display_name: 'Payment For',
              variable_name: 'payment_purpose',
              value: 'NACOMSS AUK Aspirant Form'
            }, {
              display_name: 'Office Aspiring For',
              variable_name: 'office',
              value: this.aspirant.office
            }]
          },
          subaccount: 'ACCT_2hmxzt7lalj1rr7',
          bearer: 'subaccount'
        };
        this.paystackService.initializeTransaction(dataString).subscribe(response => {
          if (response.status) {
            this.toasterService.pop('success', 'Success!', 'Authorization URL created. Redirecting...');
            window.location.href = response.data.authorization_url;
          } else {
            this.toasterService.pop('error', 'Oops!', 'Failed to initialize transaction');
            this.router.navigate(['/register']);
            $('#pageDimmer').remove();
          }
        });
      } else {
        this.toasterService.pop('error', 'Oops!', 'Something went wrong');
        this.router.navigate(['/register']);
        $('#pageDimmer').remove();
      }
    });
  }

}
