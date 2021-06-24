SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([id], [firstName], [lastName], [userName], [email], [firebaseId])
VALUES
  (1, 'Aaron', 'Frankenfield', 'roadtriphorror', 'aaronfrankenfield@gmail.com', 'LJXgSdNSR8OQfqqRoyhrlYtE0Fx2'),
  (2, 'Mary', 'Arritt', 'mary', 'googliemooblie@yahoo.com', 'kMKwukDWcINbON8OezRtckjL2n72');
SET IDENTITY_INSERT [UserProfile] OFF