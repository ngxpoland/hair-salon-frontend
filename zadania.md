# Zadania do projektu: hair-salon-frontend

## Notatka

Plik ten został stworzony w celu edukacyjnym, a konkretnie ze względu na niski próg wejścia. Prowadzenie zadań w ten sposób jest wysoce nieefektywne, optymalnym rozwiązaniem jest używanie dedykowanego narzędzia do zarządzania projektmi / zadaniami, tzw.: "project/task management tool", np.: Jira, Gitlab Issues, Github Projects.

## Lista zadań

### Zadanie 1: Dodanie nowego klienta
 - [x] Dodanie kontrolki checkbox na liście klientów
 - [x] Kliknięcie przycisku Nowy otworzy formularz w dialogu
 - [x] Refactor istnejącego formularza, dodawaie pola telefon

### Zadanie 2: Komunikat po dodaniu elementu do listy i refresh listy
 - [x] Dodać nieinwazyjny komunikat o pomyślnym dodaniu użytkownika (np. taki: https://material.angular.io/components/snack-bar/overview)
 - [x] Wykonać refresh listy

### Zadanie 3: Edycja istniejącego klienta
 - [x] Refactor formularza dodawania nowego klienta, nowa funkcjonalność - możliwości edycji istniejącego klienta
 - [x] Użycie metody putClient z clientService do aktualizacji danych na serwerze (przykład wywołania jest w client-list.component.ts w komentarzu)
 - [x] Komunikat + refresh (refresh niepotrzebny!)

### Zadanie 4: Potwierdzenie usunięcia klienta
 - [x] Dialog w stylu: Czy na pewno chcesz usunąć klienta ...? TAK NIE
 - [x] Użycie metody deleteClient z clientService
 - [x] Komunikat + refresh

### Zadanie 5: Czyszczenie kodu
 - [ ] Usunięcie zakomentowanych bloków kodu
 - [ ] Formatowanie kodu projektu

### Zadanie 6: Błąd wizualny w komponencie YesNoDialogComponent
 - [x] Wyrównaj przyciski do prawej

### Zadanie 7: Refaktor listy klientów
 - [x] Powiązanie modelu danych - Client z MatCheckbox w jedną strukturę SelectableElement<MatCheckbox, Client>
 - [x] Usuwanie wielu elementów z listy

 ### Zadanie 8: Refaktoryzacja toolbara
 - [x] Toolbar posiada teraz komponent checkbox Zaznacz wszystko, którego zaznaczenie spowoduje zaznaczenie wszystkich checkboxów w tabeli
 - [x] Elementy (przyciski) nie są zakodowane na sztywno, tylko są generowane na podstawie przekazanej konfiguracji
 - [x] Przyciski: Edytuj, Usuń są domyśnie wyłączone (flaga disabled = true) zmienna przekazywana jest przez konfigurację z komponentu listy

### Zadanie 9: Refactor listy klientów
 - [ ] Dodanie do listy na końcu każdego wiersza, przycisku ikony '3 kropki', która po wciśnięciu rozwija overlay panel z menu w stylu (https://material.angular.io/components/menu/examples)
 - [ ] Dodanie przycisków z ikoną i implementacja: 'Edytuj', 'Usuń', 'Duplikuj' do rozwijanego menu

### Zadanie 10: Refactor formularza edycji wielu klientów
- [x] Formularz edycji zawiera przyciski sterujące następny, poprzedni, zapisz, anuluj
- [x] Wszystkie zmiany są zapisywane "na boku" (nie na kolekcji przekazanej przez referencje, tylko na oddzielnej kopii - głęboka kopia)
- [x] Po zapisaniu danych, nie odświeżamy widoku listy (a co za tym idzie nie pytamy ponownie backend'u o dane), a używamy zapisanych informacji do jej aktualizacji
- [ ] Próba zamknięcia formularza wykrywa niezapisane zmiany i wywołuje odpowieni komunikat "Czy na pewno chcesz wyjść bez zapisania zmian?" TAK/NIE

### Zadanie 11: Nowa funkcjonalność - moduł pracowników
Celem tego zadania jest stworzenie uniwersalnej struktury 'user' oraz rozwój funkcjonalności na bieżące potrzeby (aktualnie związane z obsługą pracownika). W przyszłości wykonamy refactor i rozdzielimy unikatowe funkcjonlności, a te współdzielone zgrupujemy. Każdy użytkownik systemu może pełnić jedną lub więcej ról w systemie np. może być: pracownikiem, klientem, użytkownikiem aplikacji.

Podzadania:
 - [ ] Stworzenie modelu: pracownika (użytkownika - 'user')
 - [ ] Stworzenie "zaślepki" serwisu (mock): userService (opcjonalnie, można odrazu wykonać pełny serwis - jak Ci wygodniej)
 - [ ] Stworzenie komponentu: lista użytkowników
 - [ ] Stworzenie formularza dodawania nowego / edycji istniejącego pracownika
 - [ ] Stworzenie dialogu potwierdzającego dezaktywacje użytkownika + weryfikacja roli
 - [ ] Dodanie komunikatów potwierdzających wykonanie operacji lub błąd (snackbar)
 - [ ] Implementacja userService (CRUD)

### Zadanie 12: Nowa funkcjonalność - moduł produktów
Celem tego zadania jest stworzenie wielu drobnych funkcjonalności bezpośrednio powiązanych z usługami, które będą realizowane przez pracowników zakładu fryzjerskiego. Nazwiemy to produkty (product) i podzielimy na kategorie (category) - to kategoria będzie definiować, czy chodzi o "usługę", czy o "prodykt fizyczny" np.: odżywka do włosów dobrej marki.

Podzadania:
 - [ ] Stworzenie modelu: produkt (dla wprowadzenia pewnej uniwersalności będzie to 'product')
 - [ ] Stworzenie modelu: kategorii (category)
 - [ ] Stworzenie serwisu: productService
 - [ ] Stworzenie komponentu: lista produktów
 - [ ] Stworzenie komponentu: nowy produkt / edycja istniejącego
 - [ ] Stworzenie dialogu potwierdzającego usunięcie produktu
 - [ ] Stworzenie komponentu: kontrolka typu dropdown - wybór 1 produktu (lista elementów + zintegrowana wyszukiwarka)
 - [ ] Stworzenie komponentu: kontrolka typu multiselect - wybór wielu produktów (lista + wyszukiwarka)

### Zadanie 13: Nowa funkcjonalność - lista wizyt (apointment)
- [ ] Stworzenie modelu: wizyta (apointment)
- [ ] Stworzenie serwisu: apointmentService
- [ ] Stworzenie komponentu: lista wizyt
- [ ] Stworzenie komponentu: nowa wizyta / edycja istniejącej
- [ ] Stworzenie dialogu potwierdzającego anulowania wizyty

### Zadadnie 14: Błąd - formularz nowego klienta zapisuje pusty rekord w bazie
- [x] Nie działa formularz dodawania nowego klienta

### Zadanie 15: Nowa funkcjonalność - paginacja dla komponentu lista klientów
- [ ] Dropdown wyboru ilości elementów widocznych na stronie: 10, 25, 50, 100, 250, kontrolka umieszczona bezpośrednio w komponencie paginacji, tak jak tu: https://material.angular.io/components/paginator/overview
- [ ] Domyślnie paginacja ma obsługiwać 10 elementów na stronę (można to skonfigurować w ustawieniach)
- [ ] Zmiana ilości elementów na liście ma się zapisywać w localStorage dla wybranego widoku
- [ ] Priorytetem ilości elementów widocznych na stronie jest najpierw to co ustawimy w komponencie, a na drugim miejscu to co ustawimy globalnie dla wszystkich widoków
- [ ] Refactor API do obsługi paginacji dla listy klientów

### Zadanie 16: Nowa funkcjonalność - rola (po angielsku: 'role')
Rola jest typową strukturą słownikową, opakowujemy Role w strukturę Record, przykład: `Record<string, Role>`, dzięki czemu będziemy mogli w łatwy sposób operować na tym podstawowym typie danych.

Podzadania:
- [ ] Stworzenie modelu
- [ ] Stworzenie serwisu
- [ ] Refactor komponentu listy użytkowników, oraz modelu użytkownika (który do tej pory obsługiwał role przez pole string)
