export {};

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any; // 👈️ turn off type checking
    }
}
