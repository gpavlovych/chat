using Chat.API.Domain;
using Chat.API.Persistence;
using MediatR;

namespace Chat.API.Features.Messaging.Commands.Post;

public record PostChatMessageCommand(string UserName, string Message) : IRequest<Guid>;

public class PostChatMessageCommandHandler(AppDbContext context) : IRequestHandler<PostChatMessageCommand, Guid>
{
    public async Task<Guid> Handle(PostChatMessageCommand command, CancellationToken cancellationToken)
    {
        var chatMessage = new ChatMessage(command.UserName, command.Message);
        await context.ChatMessages.AddAsync(chatMessage);
        await context.SaveChangesAsync();
        return chatMessage.Id;
    }
}