// ============================================
// CONFIGURACIÓN FIREBASE - ARCHIVO EXTERNO
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyCYLkQFt7y0nszj7IoAGvchbpG19AmJu_s",
    authDomain: "dojo-karate-a5749.firebaseapp.com",
    projectId: "dojo-karate-a5749",
    storageBucket: "dojo-karate-a5749.firebasestorage.app",
    messagingSenderId: "73684673624",
    appId: "1:73684673624:web:5fe169d2d8cb6e4c56d62d"
};

try {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
    console.log('✅ Firebase inicializado correctamente desde firebase-loader.js');
} catch (error) {
    console.error('❌ Error inicializando Firebase:', error);
}