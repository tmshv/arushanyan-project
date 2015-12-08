int buttonPin = 2;
int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, OUTPUT);
  pinMode(ledPin, INPUT);
}

void loop() {
  if(digitalRead(buttonPin) == LOW){
    digitalWrite(ledPin, HIGH);
    delay(100);
    digitalWrite(ledPin, LOW);
    delay(500);
  }else{
    Serial.write(1);
    delay(100);
  }
}
