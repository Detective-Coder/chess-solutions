using ChessSolutions.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessSolutions.Controllers;
using ChessSolutions.Utils;

namespace ChessSolutions.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }
        public List<Comment> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT c.id, c.solutionId, c.userProfileId, c.content, c.date
                    FROM Comment c";

                    var reader = cmd.ExecuteReader();

                    var comments = new List<Comment>();
                    while (reader.Read())
                    {
                        comments.Add(new Comment()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            solutionId = DbUtils.GetInt(reader, "solutionId"),
                            userProfileId = DbUtils.GetInt(reader, "userProfileId"),
                            content = DbUtils.GetString(reader, "content"),
                            date = DbUtils.GetString(reader, "date")
                        });
                    }

                    reader.Close();

                    return comments;
                }
            }
        }

        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Comment (solutionId, userProfileId, content, date)
                        OUTPUT INSERTED.ID
                        VALUES (@solutionId, @userProfileId, @content, @date)";

                    DbUtils.AddParameter(cmd, "@solutionId", comment.solutionId);
                    DbUtils.AddParameter(cmd, "@userProfileId", comment.userProfileId);
                    DbUtils.AddParameter(cmd, "@content", comment.content);
                    DbUtils.AddParameter(cmd, "@date", comment.date);

                    comment.id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}