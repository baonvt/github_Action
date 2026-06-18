# on : push
# on : pull_request
# on : workflow_dispatch
# on : schedule
#   - cron: '0 0 * * *' 

# các loại trigger khác nhau có thể được sử dụng để xác định khi nào workflow sẽ chạy. Dưới đây là một số ví dụ về các loại trigger phổ biến:
# 1. push: Trigger này sẽ kích hoạt workflow khi có một commit được đẩy lên nhánh cụ thể trong repository. 
        # Ví dụ, nếu bạn muốn workflow chạy mỗi khi có thay đổi được đẩy lên nhánh chính, bạn có thể sử dụng trigger này.
# 2. pull_request: Trigger này sẽ kích hoạt workflow khi có một pull request được tạo hoặc cập nhật. 
        # Điều này hữu ích để kiểm tra mã nguồn trước khi hợp nhất các thay đổi vào nhánh chính.
# 3. workflow_dispatch: Trigger này cho phép bạn chạy workflow theo cách thủ công từ giao diện người dùng của GitHub Actions. 
        # Bạn có thể sử dụng trigger này để kiểm tra hoặc triển khai mã nguồn theo yêu cầu.
# 4. schedule: Trigger này cho phép bạn định kỳ chạy workflow theo một lịch trình cụ thể. 
        # Bạn có thể sử dụng cron syntax để xác định thời gian chạy workflow, ví dụ như chạy hàng ngày vào lúc 00:00. 


/*  Instructions
  - workflow là một tập hợp các job được định nghĩa trong một file YAML. Mỗi job có thể chứa nhiều bước (steps) để thực hiện các tác vụ cụ thể.
  - mỗi jobs có thể chạy trên một runner cụ thể, và các bước trong job sẽ được thực hiện theo thứ tự từ trên xuống dưới.
  - mỗi step có thể thực hiện các tác vụ như chạy lệnh shell, sử dụng action từ marketplace, custom scripts hoặc thực hiện các thao tác khác.
  - thường workflow được sử dụng để tự động hóa các quy trình phát triển phần mềm, kiểm tra mã nguồn, 
    triển khai ứng dụng và nhiều tác vụ khác trong quá trình phát triển phần mềm.
  - Jobs chạy trên các runner có thể là máy chủ ảo do GitHub cung cấp hoặc runner tự quản lý mà bạn triển khai trên hạ tầng của riêng bạn ,
  mỗi runner có thể được cấu hình để chạy trên các hệ điều hành khác nhau như Ubuntu, Windows hoặc macOS, tùy thuộc vào yêu cầu của dự án ,
  jobs có thể được cấu hình để chạy song song hoặc tuần tự, tùy thuộc vào mối quan hệ giữa các job và yêu cầu của workflow ,
*/

