using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class ProductItemOrderdCorrected : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ItemOrdered_ProductNamr",
                table: "OrderItems");

            migrationBuilder.AddColumn<string>(
                name: "ItemOrdered_ProductName",
                table: "OrderItems",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ItemOrdered_ProductName",
                table: "OrderItems");

            migrationBuilder.AddColumn<string>(
                name: "ItemOrdered_ProductNamr",
                table: "OrderItems",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
