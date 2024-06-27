namespace Chat.API.Domain;

public class ChatMessage
{
    public Guid Id { get; set; }

    public string UserName { get; set; }

    public string Message { get; set; }

    private ChatMessage()
    {
    }

    public ChatMessage(string userName, string message)
    {
        Id = Guid.NewGuid();
        UserName = userName;
        Message = message;
    }
}
