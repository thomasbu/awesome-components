import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component'
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UserFormatPipe } from './pipes/userFormat.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';


@NgModule({
  declarations: [
    CommentsComponent,
    ShortenPipe,
    UserFormatPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    CommentsComponent,
    ReactiveFormsModule,
    ShortenPipe,
    UserFormatPipe,
    TimeAgoPipe
  ]
})
export class SharedModule { }
