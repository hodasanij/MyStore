import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MeetingsComponent } from './meetings.component';

@NgModule({
  declarations: [CreateMeetingComponent, MeetingsComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class MeetingsModule {}
