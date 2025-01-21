// src/index.test.ts
import { sayHello } from '../src/index'; // Importation de la fonction à tester
describe('sayHello function', () => {
  it('should return a greeting message', () => {
    // Test de la fonction avec un nom d'utilisateur
    expect(sayHello("Utilisateur")).toBe("Bonjour, Utilisateur!");
  });
});