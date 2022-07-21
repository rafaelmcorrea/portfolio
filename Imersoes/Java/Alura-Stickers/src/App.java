import java.net.URI;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        String url = "https://raw.githubusercontent.com/alura-cursos/imersao-java/api/TopMovies.json";
        URI endereco = URI.create(url);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest;
        HttpRequest.newBuilder(endereco).Get();
    }
}
