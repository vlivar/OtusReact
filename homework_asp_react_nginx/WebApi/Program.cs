var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(opt => opt.AddPolicy("CorsPolicy",
    builder =>
    {
        builder.WithOrigins("http://front:3000");
    }));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.UseCors("CorsPolicy");

app.Run();
