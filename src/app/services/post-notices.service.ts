import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFile } from '../shared/models/Ifile';

@Injectable({
  providedIn: 'root'
})
export class PostNoticesService {
  API_URL= environment.serUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  uploadFile(files: FormData) {
    return this.httpClient.post(this.API_URL+'cloudinary/upload', files, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
