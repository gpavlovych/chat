using Chat.API.Features.Messaging.Dtos;
using Chat.API.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Chat.API.Features.Messaging.Queries.List;

public record ListChatMessagesQuery : IRequest<IEnumerable<ChatMessageDto>>;

public class ListChatMessagesQueryHandler(AppDbContext context) : IRequestHandler<ListChatMessagesQuery, IEnumerable<ChatMessageDto>>
{
    public async Task<IEnumerable<ChatMessageDto>> Handle(ListChatMessagesQuery request, CancellationToken cancellationToken)
    {
        return await context.ChatMessages
            .Select(p => new ChatMessageDto(p.Id, p.UserName, p.Message))
            .ToListAsync();
    }
}