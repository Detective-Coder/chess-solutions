using ChessSolutions.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChessSolutions.Utils;

namespace ChessSolutions.Repositories 
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        private readonly IUserProfileRepository userProfileRepository;
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.id, up.firstName, up.lastName, up.userName, up.email, 
                            up.firebaseId
                        FROM UserProfile up
                        WHERE firebaseId = @firebaseId";

                    DbUtils.AddParameter(cmd, "@firebaseId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            id = DbUtils.GetInt(reader, "id"),
                            firstName = DbUtils.GetString(reader, "firstName"),
                            lastName = DbUtils.GetString(reader, "lastName"),
                            userName = DbUtils.GetString(reader, "userName"),
                            email = DbUtils.GetString(reader, "email"),
                            firebaseId = DbUtils.GetString(reader, "firebaseId"),
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (firstName, lastName, userName, email, firebaseId)
                        OUTPUT INSERTED.ID
                        VALUES (@firstName, @lastName, @userName, @email, @firebaseId)";
                    DbUtils.AddParameter(cmd, "@firstName", userProfile.firstName);
                    DbUtils.AddParameter(cmd, "@lastName", userProfile.lastName);
                    DbUtils.AddParameter(cmd, "@userName", userProfile.userName);
                    DbUtils.AddParameter(cmd, "@email", userProfile.email);
                    DbUtils.AddParameter(cmd, "@firebaseId", userProfile.firebaseId);

                    userProfile.id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}
