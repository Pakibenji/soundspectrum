require "test_helper"

class PrivateControllerTest < ActionDispatch::IntegrationTest
  test "should get user" do
    get private_user_url
    assert_response :success
  end
end
