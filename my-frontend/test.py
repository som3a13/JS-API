import sys
from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWebEngineWidgets import QWebEngineView
from PyQt6.QtCore import QUrl

class Browser(QMainWindow):
    def __init__(self):
        super().__init__()
        self.browser = QWebEngineView()
        # Load the HTML file or URL that requests microphone access
        self.browser.setUrl(QUrl("https://www.google.com"))  # Update the path to your local file
        self.setCentralWidget(self.browser)
        self.showMaximized()

app = QApplication(sys.argv)
window = Browser()
sys.exit(app.exec())
