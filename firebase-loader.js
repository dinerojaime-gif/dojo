// ============================================
// CONFIGURACIÓN FIREBASE - ARCHIVO EXTERNO
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyDEjFx_uqjUhmx1QMdsi5E7CwmP5stgIBM",
    authDomain: "dojo-karate-3ea23.firebaseapp.com",
    projectId: "dojo-karate-3ea23",
    storageBucket: "dojo-karate-3ea23.firebasestorage.app",
    messagingSenderId: "549019764649",
    appId: "1:549019764649:web:f584b68e62709a8e13a6b8",
    measurementId: "G-GE55KRV269"
};

try {
    // Inicializa Firebase con la nueva configuración
    firebase.initializeApp(firebaseConfig);
    
    // Prepara la base de datos Firestore para usarla en el resto de tu aplicación
    window.db = firebase.firestore();
    
    console.log('✅ Firebase inicializado correctamente desde firebase-loader.js');
} catch (error) {
    console.error('❌ Error inicializando Firebase:', error);
}