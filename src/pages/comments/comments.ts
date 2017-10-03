import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';
import { Dish } from '../../shared/dish';


/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  feedbackForm:FormGroup;
  comment: Comment;
  dish: Dish;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder ) {

      this.feedbackForm = this.formBuilder.group({
        author: ['', [Validators.required, Validators.minLength(2)] ],
        comment: ['', Validators.required],
        rating: 5
      });
  }

  ngOnInit() {
    this.dish = this.navParams.get('dish');
    console.log('CommentsPage - ngOnInit - this.dish = ', this.dish)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  onSubmit() {
    this.comment = this.feedbackForm.value;
    this.comment.date = new Date().toISOString();
    console.log('CommentsPage - onSubmit - this.dish = ', this.dish)
    this.viewCtrl.dismiss(this.comment);
  }

}
