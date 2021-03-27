import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-edit-roles-modal',
  templateUrl: './edit-roles-modal.component.html',
  styleUrls: ['./edit-roles-modal.component.css']
})
export class EditRolesModalComponent implements OnInit {
  @Input() updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    
  }

  updateRoles() {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }

}
