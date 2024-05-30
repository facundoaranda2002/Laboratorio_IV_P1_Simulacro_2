import { Injectable } from '@angular/core';
import { Container } from '../models/container';
import { Firestore, addDoc, collection, updateDoc, getDocs,doc,deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  containers : Array<Container> = [];
  constructor(private firestore: Firestore) { }

  agregarContainer (container:any) {
    const ref = collection(this.firestore,'container');
    return addDoc(ref,container);
  }

  async borrarContainers(container: Container){
    try {
      const containerRef = collection(this.firestore, 'container');
      const documento = doc(containerRef, container.id);
      await deleteDoc(documento);
      return true;
    } catch (error) {
      console.error("Error al borrar el container: ", error);
      return false;
    }
  }

  async modificarContainers(container: any){
    try {
      const containerRef = collection(this.firestore, 'container');
      const documento = doc(containerRef, container.id);
      await updateDoc(documento, {
        color: container.color,
        empresa: container.empresa,
        capacidad: container.capacidad
      });
      return true;
    } catch (error) {
      console.error("Error al modificar el container: ", error);
      return false;
    }
  }

  
  async getContainers() {
    const querySnapshot = await getDocs(collection(this.firestore, "container"));
    this.containers = [];
    querySnapshot.forEach((doc) => {
      let container = doc.data() as any;
      container.id = doc.id;
      this.containers.push(container)
    });
    return this.containers;
  }
}
