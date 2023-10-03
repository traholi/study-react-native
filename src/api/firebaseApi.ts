import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { Functions, getFunctions } from 'firebase/functions';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import { Database, getDatabase } from 'firebase/database';
import { config } from '../constnts/firebase';

class FirebaseApi {
  private firebaseConfig = config;

  readonly auth: Auth;

  readonly firestore: Firestore;

  readonly functions: Functions;

  readonly storage: FirebaseStorage;

  readonly database: Database;

  private REGION = 'asia-northeast1';

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.firestore = getFirestore(app);
    this.functions = getFunctions(app, this.REGION);
    this.storage = getStorage(app);
    this.database = getDatabase(app);
    this.auth = getAuth(app);
  }
}

export const firebaseApi = new FirebaseApi();
