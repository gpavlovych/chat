namespace Chat.API.Features.Messaging.Dtos;

public sealed record ChatMessageDto (Guid? Id, string UserName, string Message);