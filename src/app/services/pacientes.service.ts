import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Paciente from '../interfaces/pacientes.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private firestore: Firestore) { }

  addPaciente(paciente: Paciente) {
    const pacienteRef = collection(this.firestore, 'paciente');
    return addDoc(pacienteRef, paciente);
  }

  getPacientes(): Observable<Paciente[]> {
    const pacienteRef = collection(this.firestore, 'paciente');
    return collectionData(pacienteRef, { idField: 'id' }) as Observable<Paciente[]>;
  }

  deletePaciente(paciente: Paciente) {
    const pacienteDocRef = doc(this.firestore, `paciente/${paciente.id}`);
    return deleteDoc(pacienteDocRef);
  }

}